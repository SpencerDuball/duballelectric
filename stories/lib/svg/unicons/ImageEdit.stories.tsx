import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ImageEdit, ImageEditPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ImageEdit",
  component: ImageEdit,
} as ComponentMeta<typeof ImageEdit>;

const Template: ComponentStory<typeof ImageEdit> = (args: ImageEditPropsI) => (
  <x.div display="flex" gap="20px">
    <ImageEdit {...args} />
    <ImageEdit {...args} fill="red.500" />
    <ImageEdit {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
