#!/bin/bash

HOST='https://aftonbladet-checker.herokuapp.com'
ENDPOINT='/api/seed/add-today'
curl "${HOST}${ENDPOINT}"
