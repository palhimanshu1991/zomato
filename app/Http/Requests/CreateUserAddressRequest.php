<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateUserAddressRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title'=> 'required',
            'street' => 'required',
            'locality' => 'required',
            'landmark' => 'required',
            'pincode' => 'required',
            'state_id' => 'required',
            'district_id' => 'required'
        ];
    }
}
