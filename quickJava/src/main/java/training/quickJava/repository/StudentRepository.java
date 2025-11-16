package training.quickJava.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import training.quickJava.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {
}
