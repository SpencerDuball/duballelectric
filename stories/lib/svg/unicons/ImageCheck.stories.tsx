import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ImageCheck, ImageCheckPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ImageCheck",
  component: ImageCheck,
} as ComponentMeta<typeof ImageCheck>;

const Template: ComponentStory<typeof ImageCheck> = (
  args: ImageCheckPropsI
) => (
  <x.div display="flex" gap="20px">
    <ImageCheck {...args} />
    <ImageCheck {...args} fill="red.500" />
    <ImageCheck {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
