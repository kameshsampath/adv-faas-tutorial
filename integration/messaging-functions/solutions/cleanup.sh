#!/bin/bash 

# Clean up actions
wsk -i action delete msgdemo/splitter
wsk -i action delete msgdemo/uppercase
wsk -i action delete msgdemo/sorter
wsk -i action delete msgdemo/msgsender

# Delete the triggers
wsk -i trigger delete trig_queue_99
wsk -i action delete splitsortucase
wsk -i rule delete rule_splitsortucase

# Clean up package

wsk -i package delete msgdemo

