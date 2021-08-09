import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SmileWinkAlt, SmileWinkAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SmileWinkAlt",
  component: SmileWinkAlt,
} as ComponentMeta<typeof SmileWinkAlt>;

const Template: ComponentStory<typeof SmileWinkAlt> = (
  args: SmileWinkAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <SmileWinkAlt {...args} />
    <SmileWinkAlt {...args} fill="red.500" />
    <SmileWinkAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
