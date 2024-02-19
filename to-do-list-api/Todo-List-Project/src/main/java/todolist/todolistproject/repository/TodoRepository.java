package todolist.todolistproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import todolist.todolistproject.entity.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long> {
    
}
