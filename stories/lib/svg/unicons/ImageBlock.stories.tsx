import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ImageBlock, ImageBlockPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ImageBlock",
  component: ImageBlock,
} as ComponentMeta<typeof ImageBlock>;

const Template: ComponentStory<typeof ImageBlock> = (
  args: ImageBlockPropsI
) => (
  <x.div display="flex" gap="20px">
    <ImageBlock {...args} />
    <ImageBlock {...args} fill="red.500" />
    <ImageBlock {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
