import { Batch } from './batch.model';
import { Subject } from './subject.model';
import { Lecturer } from 'app/models/lecturer.model';

export class Session {
  selectedLecturer: Lecturer[];
  selectedSubject: Subject[];
  selectedTag: string;
  selectedGroup: Batch[];
  studentCount: string;
  duration: string;
}
