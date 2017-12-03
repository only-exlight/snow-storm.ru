<?php
    class SliderInfo {
        public $title = '';
        public $discription = '';
        public $link = '';
        public $imglink = '';

        
        function __construct( $title, $discription, $link, $imglink) {
            $this->title = $title;
            $this->discription = $discription;
            $this->link = $link;
            $this->imglink = $imglink;
        }
    }

?>