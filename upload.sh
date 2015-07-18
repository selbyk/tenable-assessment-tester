#!/bin/bash
aws s3 sync ./dist s3://tenable.selby.io --acl public-read
