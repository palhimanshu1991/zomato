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

    private $id;

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
        $random = uniqid();
        $extension = $file->extension();
        $filename = $this->filenamePrefix . "-" . $this->model->id .$random."." . $extension;

        $this->uploadImage($file, $filename);

        $this->createImage();
    }

    public function updateHandle() {
        $file = $this->request->file('image');
        $random = uniqid();
        $extension = $file->extension();
        $filename = $this->filenamePrefix . "-" . $this->model->id .$random. "." . $extension;

        $this->uploadImage($file, $filename);

        $this->updateImage();
    }

    private function updateImage() {
       // dd($this->imagePath);
        $image = $this->model->images->first();
        $image->path = $this->imagePath;

        //dd($this->model->images()->save());
        $this->model->images()->save($image);
        dd($image->path);
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