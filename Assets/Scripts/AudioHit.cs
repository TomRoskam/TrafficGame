using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AudioHit : MonoBehaviour
{
    public AudioSource HitSound;

    // Start is called before the first frame update
    void Start()
    {
        HitSound = GetComponent<AudioSource>();
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    private void OnCollisionEnter(Collision collision)
    {
        if(collision.gameObject)
        {
            HitSound.Play();
        }
    }
}
