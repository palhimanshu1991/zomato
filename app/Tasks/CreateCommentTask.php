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
        // rename Commentable to CommentInterface
        $this->text = $text;
        $this->model = $model;
    }

    public function handle()
    {
        $comment = new Comment;
        $comment->user_id = auth()->user()->id;
        $comment->text = $this->text;

        $this->model->comments()->save($comment);
    }

}