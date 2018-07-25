<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    public function user(){
        return $this->belongsTo('App\User');
    }

    public function restaurant(){
        return $this->belongsTo('App\Restaurant');
    }

    public function photos(){
        return $this->morphMany('App\Photo','imageable');
    }

    public function likes(){
        return $this->morphMany('App\Like','likeable');
    }


    public function comments(){
        return $this->morphMany('App\Comment','commentable');
    }

    
}
