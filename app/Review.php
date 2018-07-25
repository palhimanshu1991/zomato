<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use User;
use Restaurant;
use Photo;
use Like;
use Comment;

class Review extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function restaurant()
    {
        return $this->belongsTo(Restaurant::class);
    }

    public function photos()
    {
        return $this->morphMany(Photo::class, 'imageable');
    }

    public function likes()
    {
        return $this->morphMany(Like::class, 'likeable');
    }


    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }


}
