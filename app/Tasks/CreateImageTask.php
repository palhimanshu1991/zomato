<?php

namespace App\Tasks;

use App\Image;
use App\Contracts\Imageable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use App\Traits\GetPrefix;

class CreateImageTask extends AbstractTask
{

    /**
     * @var Model
     */
    private $model;

    /**
     * @var
     */
    private $filenamePrefix;

    /**
     * @var Request
     */
    private $request;

    /**
     * @var
     */
    private $imagePath;

    /**
     * CreateImageTask constructor.
     *
     * @param $filenamePrefix | prefix
     * @param Request $request
     * @param Imageable $model
     */
    public function __construct(Request $request, Imageable $model)
    {
        $this->model = $model;
        $this->filenamePrefix = $this->model->getPrefix();
        $this->request = $request;

    }

    public function handle()
    {
        $file = $this->request->file('image');

        $extension = $file->extension();
        $filename = $this->filenamePrefix . "-" . $this->model->id . "." . $extension;

        $this->uploadImage($file, $filename);

        $this->createImage();
    }

    private function createImage()
    {
        $image = new Image;
        $image->path = $this->imagePath;
        $this->model->images()->save($image);
    }

    private function uploadImage(UploadedFile $file, $filename)
    {
        $this->imagePath = Storage::putFileAs('media', $file, $filename);
    }

}