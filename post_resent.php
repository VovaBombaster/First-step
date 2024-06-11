                <div class="container_posts_down">
                    <li class="down_posts">
                        <div class="posts_image">
                            <img class="image_Balloons" src="http://localhost:8001/<?= $post['littleBackground'] ?>" width="296px" height="150px" alt="Bridge">
                        </div>
                        <a class="post_title_down" title='<?= $post['title'] ?>' href='/post?id=<?= $post['post_id'] ?>'>
                            <?= $post['title'] ?>
                        </a>
                        <div class="post_subtitle_down">
                            <?= $post['subtitle'] ?>
                        </div>
                        <div class="line"></div>   
                        <a class="post_people_down">
                            <div class="post_image_down" href="#">
                                <img class="post_people_image" src="http://localhost:8001/<?= $post['author_url'] ?>" alt="human"> 
                            </div>
                            <div class="post_name_down" href="#">
                                <?= $post['author'] ?>
                            </div>
                        </a>
                        <div class="post_date_down">
                            <?= $post['publish_date'] ?>
                        </div>
                    </li>
                </div>
                