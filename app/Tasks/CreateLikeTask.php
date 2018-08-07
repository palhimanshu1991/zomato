<?php
/**
 * Created by PhpStorm.
 * User: instaveritas
 * Date: 26/07/18
 * Time: 5:29 PM
 */

namespace App\Tasks;


use App\Contracts\Likeable;
use App\Like;

class CreateLikeTask
{
    /**
     * @var Model
     */
    private $model;

    /**
     * CreateCommentTask constructor.
     * @param $text
     * @param LikeableInterface $model
     */
    public function __construct(Likeable $model)
    {

        $this->model = $model;
    }

    public function handle()
    {
        $this->model->likes()->firstOrCreate([
            'user_id' => auth()->user()->id,
        ]);
    }

}