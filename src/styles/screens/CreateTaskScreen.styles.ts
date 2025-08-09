import { makeStyles } from '../utils/makeStyles';

export const useCreateTaskScreenStyles = makeStyles(() => ({
  container: {
    padding: 16,
    paddingBottom: 40,
    flexGrow: 1,
  },
  headerCustom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 45,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  backText: {
    fontSize: 22,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  formContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 16,
  },
  formRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 52,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  formLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    flex: 1,
  },
  formValue: {
    fontSize: 14,
    color: '#888',
    flex: 1,
    textAlign: 'right',
  },
  textInput: {
    flex: 1,
    textAlign: 'right',
    backgroundColor: 'transparent',
    fontSize: 14,
    paddingVertical: 0,
    height: 52,
  },
  saveButton: {
    marginTop: 24,
    borderRadius: 12,
    backgroundColor: '#F7EEDD',
    alignSelf: 'center',
    width: '60%',
  },
  saveButtonLabel: {
    color: 'black',
    fontWeight: '600',
  },
  recentTasksContainer: {
    marginTop: 32,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  taskItem: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  taskName: {
    fontSize: 15,
    fontWeight: '600',
  },
  taskDetail: {
    fontSize: 13,
    color: '#666',
  },
}));
