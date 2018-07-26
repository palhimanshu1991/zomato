<?php

namespace App\Traits;

use App\Photo;

trait HasPhotos
{
    public function photos()
    {
        return $this->morphMany(Photo::class, 'imageable');
    }
}