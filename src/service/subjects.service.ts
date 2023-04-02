import { ISubjects, SubjectsModal } from '../model/subjects.model';

export const getSubjects = async () => {
	try {
		const subjects = await SubjectsModal.find();
		return subjects;
	} catch (err) {
		throw err;
	}
};
export const createSubject = async (subject: ISubjects) => {
	const newSubject = new SubjectsModal(subject);
	try {
		await newSubject.save();
		return newSubject;
	} catch (err) {
		throw err;
	}
};
export const deleteSubject = async (subjectId: string) => {
	try {
		await SubjectsModal.findByIdAndDelete(subjectId);
		return await SubjectsModal.find();
	} catch (err) {
		throw err;
	}
};
