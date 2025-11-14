package com.project.esperApp.service;

import com.project.esperApp.entity.Comment;
import com.project.esperApp.entity.Post;
import com.project.esperApp.repository.CommentRepository;
import com.project.esperApp.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class CommentService {


    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private PostRepository postRepository;

    public Comment createComment(Long postId, Long parentCommentId, String content) {

        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new RuntimeException("post not found"));

        Comment comment = new Comment();
        comment.setContent(content);
        comment.setPost(post);
        comment.setCreatedAt(LocalDateTime.now());

        if (parentCommentId != null) {
            Comment parent = commentRepository.findById(parentCommentId)
                    .orElseThrow(() -> new RuntimeException("Parent comment not found"));
            comment.setParentComment(parent);
        }

        return commentRepository.save(comment);
    }

    public List<Comment> getCommentsForPost(Long postId) {
        return commentRepository.findByPostId(postId);
    }





}
