{
  inputs = {
    nixpkgs.url = "github:/NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    self,
    nixpkgs,
    flake-utils,
  }:
    flake-utils.lib.eachDefaultSystem (
      system: let
        pkgs = nixpkgs.legacyPackages.${system};
      in {
        formatter = pkgs.alejandra;
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            bun
            inkscape
          ];

          FONTCONFIG_FILE = pkgs.makeFontsConf {
            fontDirectories = [
              pkgs.geist-font
              pkgs.hanken-grotesk
            ];
          };
          LD_LIBRARY_PATH = with pkgs; pkgs.lib.makeLibraryPath [ vips stdenv.cc.cc.lib ];
        };
      }
    );
}
