<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Cuisine extends Model
{

    protected $guarded = [
        'id'
    ];

    public function restaurants()
    {
        return $this->belongsToMany(Restaurant::class);
    }
}
