using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

[RequireComponent(typeof(Button))]
public class MutePlayAudio : MonoBehaviour
{
    AudioSource audioSource;

    [SerializeField]

    private Transform PlayButtonTransform;
    [SerializeField]
    public RawImage Speaker;
    public Texture SpeakerImg;
    public Texture Mute;  
    private bool IsMuted = true;

    private void Start()
    {
        PlayButtonTransform.position = PlayButtonTransform.InverseTransformPoint(PlayButtonTransform.position + new Vector3(50, 125, 50));
    }

    public void changeButton()
    {
        IsMuted = !IsMuted;

        if(IsMuted)
        {
            Speaker.texture = SpeakerImg;
        } else
        {
            Speaker.texture = Mute;
        }
    }

    public void mute()
    {
        AudioListener.pause = !AudioListener.pause;
        this.changeButton();
    }


}
