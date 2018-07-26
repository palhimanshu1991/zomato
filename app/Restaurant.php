<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Restaurant extends Model
{
    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function address()
    {
        return $this->hasOne(Address::class);
    }

    public function cuisines()
    {
        return $this->belongsToMany(Cuisine::class);
    }

    public function photos()
    {
        return $this->morphMany(Photo::class, 'imageable');
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }
}
