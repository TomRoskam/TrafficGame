using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FollowCar : MonoBehaviour
{

    
    [SerializeField]
    private Transform carTransform;

    [SerializeField]
    private float followSpeed;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {

        transform.position = Vector3.Lerp(
            transform.position,
            carTransform.position - carTransform.forward * 0.5f + new Vector3(0,0.25f   ,0),
            followSpeed);
        transform.LookAt(carTransform,carTransform.up);
    }
}
