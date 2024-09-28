<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;
    protected $fillable = [
        'nameProduct', 
        'imageProduct', 
        'priceProduct', 
        'id_user', 
        'id_product'
    ];

}
