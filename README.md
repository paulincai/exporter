# Exporter

A Sketch plugin that exports Sketch artboards into clickable HTML file. 

Exporter Features:
- Single HTML file with links highlighting
- Show artboard as an overlay over a previous artboard  / [Picture](https://github.com/MaxBazarov/exporter/raw/master/tests/Pictures/Link-ModalArtboard.png), [Example](https://github.com/MaxBazarov/exporter/raw/master/tests/Link-ModalArtboard.sketch)
- Support for Sketch-native links (including Back links, cross-page links, links inside Symbols and overrided hotspot links)
- Support for external links / [Hint](https://github.com/MaxBazarov/exporter/blob/master/Hints.md#hint2)
- Limited support for layers with fixed position (only left and top panels) / [Example](https://github.com/MaxBazarov/exporter/tree/master/tests/FixeLayers)
- Skips pages and artboards with * prefix 
- Ability to insert Google counter
- Ability to hide navigation controls and hotspot highlighting
- Publishing to external site by SFTP

Viewer features:
- Gallery / [Picture](https://github.com/MaxBazarov/exporter/raw/master/tests/Pictures/Gallery.png)
- Async pre-loading of document pages

[Change Log](https://github.com/MaxBazarov/exporter/blob/master/CHANGELOG.md)

Please send your feedback and requests to max@bazarov.ru

<img width="262" height="204" src="https://raw.githubusercontent.com/MaxBazarov/exporter/master/tests/Pictures/Menu.png"/><img width="423" height="398" src="https://github.com/MaxBazarov/exporter/blob/master/tests/Pictures/Publish-Dialog.png?raw=true"/>


## Installation

To install, [download the zip file](https://github.com/MaxBazarov/exporter/raw/master/Exporter.sketchplugin.zip) and double-click on `Exporter.sketchplugin`. The commands will show up under `Plugins > Exporter`. 

## Usage

You can use Sketch-native links or add links to external sites. When you're finished adding these you can generate a HTML website of the all document pages by selecting `Export to HTML`. The generated files can then be uploaded to a server so you can show it to your clients. 

### Retina Images
 
By default it will show 2x images for high pixel density screens. To turn this off uncheck `Export retina images` in Settings and re-export the page.

## Future 
* Annotations
* Commenting
* Overlays
  * Show overlay near a mouse click position
  * Close overlays on a click outside overlay
* Links
  * Ability to open external links in new window
  * Tool to remove external links from selected objects
  * Higlight external links inside Sketch
* Show plugin toolbar inside Sketch (crazy thing)

