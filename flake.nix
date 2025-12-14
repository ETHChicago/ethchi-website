{
  description = "ETHChicago website - Astro with React and Tailwind";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs_22
            yarn
          ];

          shellHook = ''
            echo "ETHChicago website dev environment"
            echo "Run 'yarn install' to install dependencies"
            echo "Run 'yarn dev' to start the dev server"
          '';
        };
      }
    );
}
