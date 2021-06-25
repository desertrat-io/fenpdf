# FenPDF

## An "In Browser" PDF viewer that supports both read and write operations

### Why?

The wonderful pdfjs solution put out by Mozilla is a fantastic tool for in browser rendering of PDF documents. However,
this library does not allow for write operations, which is something that could be quite useful. Items like redactions and markup on a PDF are important features.

There are several solutions out there for in browser rendering with write support, however these solutions are extremely
costly, and prohibitive to our needs. 

FenPDF is a ground up library for displaying PDF documents in browser without the need for external tools. While always
a work in progress, this library is planned to have several features to meet our needs and beyond

- PDF 1.8 Support
- PDF/A support
- Annotation Support
- Redaction Support
- Networking Support (save back to the server)
- Display Operations Support
- Flexible API
- Easy to drop in and use with very little configuration
- Modular, plugin based design for mix and match functionality
- Everything is a plugin!

### Everything is a plugin

FenPDF provides only one basic feature out of the box, and that is displaying a PDF, and providing the basic API
to "write" to the PDF that plugins can use for their own purposes. Essentially, the most basic I/O that makes sense.

In addition, plugin support will also be part of it. There are helper "plugins" that assist in creating different types
of plugins, such as UI widgets, editing capabilities, and more.


### WIP

Since it's a work in progress these are kind of just placeholders for expected functionality.
