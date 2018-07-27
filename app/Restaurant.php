<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Restaurant extends Model
{

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

    public function photos()
    {
        return $this->morphMany('App\Photo', 'imageable');
    }

    public function reviews()
    {
        return $this->hasMany('App\Review');
    }
}
