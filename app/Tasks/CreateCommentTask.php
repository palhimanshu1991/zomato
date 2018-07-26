<?php

namespace App\Tasks;

use App\Comment;
use App\Contracts\Commentable;
use Illuminate\Database\Eloquent\Model;

class CreateCommentTask extends AbstractTask
{
    private $text;
    /**
     * @var Model
     */
    private $model;

    /**
     * CreateCommentTask constructor.
     * @param $text
     * @param Commentable $model
     */
    public function __construct($text, Commentable $model)
    {
        $this->text = $text;
        $this->model = $model;
    }
//To Do Add auth
    public function handle()
    {
        $comment = new Comment;
        $comment->user_id = 1;
        $comment->text = $this->text;

        $this->model->comments()->save($comment);

    }

}