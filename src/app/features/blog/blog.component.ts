import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BlogPlaceholder {
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent {
  readonly linkedInUrl =
    'https://www.linkedin.com/in/aditya-more-83520a150';

  readonly placeholderPosts: BlogPlaceholder[] = [
    {
      category: 'Distributed Systems',
      title: 'Building Scalable Microservices with Kafka',
      excerpt:
        'Deep-diving into event-driven architecture patterns with Apache Kafka — from partition strategies and consumer group offsets to exactly-once semantics and schema evolution with Avro.',
      readTime: '8 min read',
    },
    {
      category: 'Cloud & DevOps',
      title: 'AWS Cost Optimization Strategies',
      excerpt:
        'Practical techniques I used to slash AWS S3 costs by 70% at HP — covering intelligent tiering, lifecycle policies, multipart upload cleanup, and right-sizing EC2 instances.',
      readTime: '6 min read',
    },
    {
      category: 'Backend Engineering',
      title: 'Spring Boot Best Practices',
      excerpt:
        'A comprehensive guide to production-grade Spring Boot applications: exception handling, layered architecture, connection pooling with HikariCP, and structured logging with Logback.',
      readTime: '10 min read',
    },
  ];

  trackByTitle(_: number, post: BlogPlaceholder): string {
    return post.title;
  }
}
