<?php

namespace App;

use App\Contracts\Commentable;
use App\Contracts\Imageable;
use App\Contracts\Likeable;
use App\Traits\HasComments;
use App\Traits\HasLikes;
use App\Traits\HasPhotos;
use Illuminate\Database\Eloquent\Model;

class Review extends Model implements Commentable, Likeable, Imageable
{
    use HasComments, HasLikes, HasPhotos;

    protected $guarded = ['id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function restaurant()
    {
        return $this->belongsTo(Restaurant::class);
    }
}
