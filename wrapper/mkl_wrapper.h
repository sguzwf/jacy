#ifndef MKL_WRAPPER_H
#define MKL_WRAPPER_H

#ifdef __cplusplus
extern "C"{
#endif

void* createSymmetricSolver(int* p_rows,int n_rows, int* p_columns);
void* createSymmetricSolverSingle(int* p_rows,int n_rows, int* p_columns);
void* createNonSymmetricSolver(int* p_rows,int n_rows, int* p_columns);
int factorPositiveDefinite(void* handle,double* A);
int dssSolve(void* handle, double* x, double* b,int n);
int factorIndefinite(void* handle,double* A);
int deleteSolver(void* handle);
int symmetricSparseMatrixDenseVector(double* y, int* p_rows,int n_rows, int* p_columns, double* A,double* x);
void* factorizeDense(double* A,int N);
void deleteDenseFactorization(void* ipiv);
int solveDense(void* ipiv,double* A,double* b,int N);
//int SVDf(float* A,int N,int M, float* u,float * vt);

#ifdef __cplusplus
}
#endif

#endif
