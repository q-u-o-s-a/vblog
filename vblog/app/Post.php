<?php
/**
 * Created by PhpStorm.
 * User: Jakub
 * Date: 12.02.2021
 * Time: 14:30
 */

namespace App;

use Illuminate\Database\Eloquent\Model;


class Post extends Model
{
    protected $fillable = [
        'title', 'text',
    ];

    public $timestamps = [
        'updated_at', 'created_at'
    ];

    public function getListPerPage()
    {
        return $this->latest()->take(25)->get();
    }

    public function getOne(int $id)
    {
        return $this->findOrFail($id);
    }

    public function createNew(string $title, string $text)
    {
        $this->create([
            'title' => $title,
            'text' => $text,
        ]);
    }
}