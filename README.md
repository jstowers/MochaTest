# MochaTest

## Wednesday, January 11, 2017

Worked this evening learning the fundamentals for using the Mocha test runner and the Chai assertion library to write unit tests.

My intention was to write tests for QueueWithLinkedList, but ran into difficulties.

First, my Queue program takes a command line argument -- reading in the text file.  This poses some challenges for the Mocha test runner.

Second, the Queue program is not constructed with modules, so I need to learn about exporting modules and how to create the object functions and properties to export to the test file.