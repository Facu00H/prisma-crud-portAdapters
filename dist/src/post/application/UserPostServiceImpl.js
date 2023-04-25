"use strict";
// public class UserPostServiceImpl implements UserPostService {
//   private final UserRepository userRepository;
//   private final PostRepository postRepository;
//   public UserPostServiceImpl(UserRepository userRepository, PostRepository postRepository) {
//     this.userRepository = userRepository;
//     this.postRepository = postRepository;
//   }
//   public Post createPostForUser(int userId, Post post) {
//     // Busca al usuario correspondiente
//     User user = userRepository.findById(userId);
//     // Crea el nuevo post y lo asocia al usuario correspondiente
//     post.setUser(user);
//     postRepository.create(post);
//     // Retorna el post creado
//     return post;
//   }
// }
//# sourceMappingURL=UserPostServiceImpl.js.map