<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('users')->insert(array(
          'email' => 'test@test.com'
          'name' => 'Test',
          'password' => bcrypt('test')
        ));
    }
}
