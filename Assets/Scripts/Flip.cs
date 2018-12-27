using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Flip : MonoBehaviour
{
    public Rigidbody rb;
    public float flipForce;
    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void FixedUpdate()
    {
        if (Input.GetKey("r"))
        {
            transform.Rotate(Vector3.right * Time.deltaTime* 400);
        }

        else if (Input.GetKey("t"))
        {
            transform.Rotate(Vector3.up * Time.deltaTime* 400);
        }
    }
}
