#!/bin/bash

cd /home/spaghetti/spaghetti.w6p.ru && git pull origin master
cd /home/spaghetti/spaghetti.w6p.ru/front && npm ci && npm run build && npm run reload
cd /home/spaghetti/spaghetti.w6p.ru/back && composer install && php artisan migrate