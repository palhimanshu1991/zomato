<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Contracts\Imageable;
use App\Traits\GetPrefix;

class Restaurant extends Model implements Imageable
{
    use GetPrefix;

    protected $guarded = [
        'id'
    ];

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function address()
    {
        return $this->belongsTo('App\Address');
    }

    public function cuisines()
    {
        return $this->belongsToMany('App\Cuisine');
    }

    public function images()
    {
        return $this->morphMany('App\Image', 'imageable');
    }

    public function reviews()
    {
        return $this->hasMany('App\Review');
    }


}
