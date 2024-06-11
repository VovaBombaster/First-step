<div class="container_posts">
    <img class="image_posts" src="http://localhost:8001/<?= $post['littleBackground'] ?>" alt="Air Lantern">
    <li class="up_posts">
        <a href="#" class="post_title">
            <?= $post['title'] ?>
        </a>
        <a title='<?= $post['title'] ?>' href='/post?id=<?= $post['post_id'] ?>'>
            <div class="post_subtitle">
                <?= $post['subtitle'] ?>
            </div>
        </a>
        <a href="#" class="post_people">
            <img class="post_people_image" src="http://localhost:8001/<?= $post['author_url'] ?>" alt="human">
            <div class="post_people_name">
                <?= $post['author'] ?>
            </div>
        </a>
        <div class="post_date">
            <?= $post['publish_date'] ?>  
        </div>  
    </li>
</div>