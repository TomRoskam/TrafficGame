using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraFollow : MonoBehaviour
{

    [SerializeField]
    private Transform targetTransform;

    [SerializeField]
    private float followSpeed;

    // Start is called before the first frame update
    void Start()
    {
    }

    // Update is called once per frame
    void Update()
    {
        //Make it move to the appropriate position in a smooth manner.
        transform.position = Vector3.Lerp(
            transform.position,
            targetTransform.position - targetTransform.forward * 4f + new Vector3(0,2f,0),
            followSpeed
        );

        //Make it look at the target.
        transform.LookAt(targetTransform,targetTransform.up);
    }
}
