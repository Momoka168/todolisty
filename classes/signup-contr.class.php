<?php

class SignupContr {
    private $uid;
    private $pwd;
    private $pwdrepeat;
    private $email;

    public function __construct($uid, $pwd, $pwdrepeat, $email)
    {
        $this->uid = $uid;
        $this->pwd = $pwd;
        $this->pwdrepeat = $pwdrepeat;
        $this->email = $email;
    }

    private function emptyInput()
    {
        if(empty($this->uid) || empty($this->pwd) || empty($this->pwdrepeat) || empty($this->email))
            return false;
        else
            return true;
    }

    private function invalidUid()
    {
        if(!preg_match("/^[a-zA-Z0-9]*$/", $this->uid))
            return false;
        else
            return true;
    }
}
