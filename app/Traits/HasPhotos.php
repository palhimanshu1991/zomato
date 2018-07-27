<?php

namespace App\Traits;

use App\Image;

trait HasPhotos
{
    public function images()
    {
        return $this->morphMany(Image::class, 'imageable');
    }
}