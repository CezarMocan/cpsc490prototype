#!/bin/bash
#export DATABASE_URL=$(heroku config:get DATABASE_URL -a bunpoumon)
export DATABASE_URL="postgres://dxgrashcgsgdhw:MLDZ6GGe-T7A5DXQ-MBaZ9yTYZ@ec2-54-83-61-45.compute-1.amazonaws.com:5432/d5k0s6ustmhr1s?ssl=true"
npm run watch