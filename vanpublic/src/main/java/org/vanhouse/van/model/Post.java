package org.vanhouse.van.model;

import java.time.Instant;
import java.util.List;

public class Post {

    private User user;
    private String status;
    private String comment;
    private List<User> likes;
    private String description;
    private Instant timestamp;
    private List<Attachment> attachments;


}
