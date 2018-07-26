<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model {


    protected $fillable = [
        'name', 'address_id', 'category_id',
    ];


    protected $hidden = [

    ];

    public function categories(){
       return $this->belongsToMany('App\Category');
    }

    public function address(){
        return  $this->hasOne('App\Address');
    }

    public function cuisines(){
        return $this->belongsToMany('App\Cuisine');
    }

    public function photos(){
        return $this->morphMany('App\Photo','imageable');
    }

    public function reviews(){
        return $this->hasMany('App\Review');
    }
}
